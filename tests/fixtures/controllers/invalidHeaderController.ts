import { Get, Res, Route, TsoaResponse } from '@jeremydavidson/tsoa-runtime';

@Route('/')
export class InvalidHeaderTestController {
  @Get('/path')
  public async getWithInvalidHeader(@Res() notFound: TsoaResponse<404, void, 'Header names must be of type string'>): Promise<void> {
    return;
  }
}
