import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

// Angular 19.2 requires the BootstrapContext to be forwarded to bootstrapApplication
// The CLI omits this — passing it explicitly fixes SSR route extraction (NG0401)
const bootstrap = (context: unknown) => bootstrapApplication(AppComponent, config, context as never);

export default bootstrap;
