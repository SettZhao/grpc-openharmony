import { calculation } from '../protobuf/calculation'
@Entry
@Component
struct Index {
  @State message: string = 'Hello World';

  build() {
    RelativeContainer() {
      Text(this.message)
        .id('HelloWorld')
        .fontSize($r('app.float.page_text_font_size'))
        .fontWeight(FontWeight.Bold)
        .alignRules({
          center: { anchor: '__container__', align: VerticalAlign.Center },
          middle: { anchor: '__container__', align: HorizontalAlign.Center }
        })
        .onClick(() => {
          this.message = 'Welcome';
          let msg = calculation.AddRequest.create({
            num1: 4,
            num2: 5
          });

          let arrayBuffer: Uint8Array = calculation.AddRequest.encode(msg).finish()

          console.log("protobuf encode result length: ",arrayBuffer.byteLength.toString())
          let decodeMsg = calculation.AddRequest.decode(arrayBuffer)
          console.log("protobuf decode result ", decodeMsg.num1.toString(), decodeMsg.num2.toString())
        })
    }
    .height('100%')
    .width('100%')
  }
}