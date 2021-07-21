import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve as pathResolve } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: (console.log(__dirname), pathResolve(__dirname, 'www')),
    }),
  ],
})
export class AppModule {}
