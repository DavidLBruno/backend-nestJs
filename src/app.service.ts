import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getPeople(): Array<string> {
    return ["JOJO"];
  }

  getHello(): string {
    return "Hello World!";
  }
}
