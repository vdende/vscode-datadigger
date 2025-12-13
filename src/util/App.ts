import * as vscode from "vscode";

export class App {

  private static _ctx: vscode.ExtensionContext;

  /**
   * Assign the context property
   *
   * @param ctx
   */
  public static init(ctx: vscode.ExtensionContext): void {
    this._ctx = ctx;
  }

  /**
   * Getter for ctx property
   *
   * @return ExtensionContext
   */
  public static get ctx(): vscode.ExtensionContext {
    // sanity
    if (!this._ctx) {
      throw new Error("App.ctx accessed before activate()");
    }
    return this._ctx;
  }

}
