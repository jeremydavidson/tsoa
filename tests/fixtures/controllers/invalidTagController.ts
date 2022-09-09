import { Route, Get, Query, Controller } from '@jeremydavidson/tsoa-runtime';

@Route('TagTest')
export class InvalidTagController extends Controller {
  /**
   * @isInt
   * @param {number} index
   */
  @Get('OrphanTag')
  public async OrphanTagWithNoName(@Query() index: number): Promise<void> {
    return;
  }
}
