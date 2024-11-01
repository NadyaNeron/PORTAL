import { APP_INITIALIZER, Provider } from "@angular/core";
import { ConfigService } from "../services/config.service";

export const AppInitializerProvider: Provider = {
    provide: APP_INITIALIZER,
    useFactory:
      (configService: ConfigService) =>
      () => configService.load(),
    deps: [ConfigService],
    multi: true,
  };