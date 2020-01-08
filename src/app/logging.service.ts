export class LoggingService {
  private loggingEnabled = true;
  public log(data) {
    if (this.loggingEnabled) {
      console.log(data);
    }
  }
}
