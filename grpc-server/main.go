package main

import (
	"context"
	"fmt"
	"net"

	proto "grpc-server/pb/helloWorld" // 导入生成的 proto 包

	"google.golang.org/grpc"
)

type Server struct {
	proto.UnimplementedCalculationServiceServer // 嵌入未实现的结构体
}

// 实现 Add 方法
func (s Server) Add(ctx context.Context, request *proto.AddRequest) (*proto.AddResponse, error) {
	fmt.Printf("Received Add request: %v\n", request)
	return &proto.AddResponse{
		Result: request.Num1 + request.Num2,
	}, nil
}

// 实现 Subtract 方法
func (s Server) Subtract(ctx context.Context, request *proto.SubtractRequest) (*proto.SubtractResponse, error) {
	fmt.Printf("Received Subtract request: %v\n", request)
	return &proto.SubtractResponse{
		Result: request.Num1 - request.Num2,
	}, nil
}

func main() {
	g := grpc.NewServer()                                // 创建 gRPC 服务器
	proto.RegisterCalculationServiceServer(g, &Server{}) // 注册服务
	lis, err := net.Listen("tcp", "0.0.0.0:8088")        // 监听端口
	if err != nil {
		panic("failed to listen:" + err.Error())
	}
	err = g.Serve(lis) // 启动 gRPC 服务器
	if err != nil {
		panic("failed to start grpc:" + err.Error())
	}
}
