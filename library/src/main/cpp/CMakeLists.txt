# the minimum version of CMake.
cmake_minimum_required(VERSION 3.16)
project(grpc_harmony_napi)

add_library(library SHARED
    napi_init.cpp
)

target_include_directories(library PRIVATE
    ${CMAKE_CURRENT_SOURCE_DIR}/thirdparty/grpc/include
)

# 直接写入 .a 文件的路径
target_link_libraries(library PRIVATE
    ${CMAKE_CURRENT_SOURCE_DIR}/thirdparty/grpc/libgrpc++_unsecure.a
)

target_link_libraries(library PUBLIC
    libace_napi.z.so
    libhilog_ndk.z.so
)

