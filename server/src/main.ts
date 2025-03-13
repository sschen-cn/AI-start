import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const corsOptions: CorsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  }
  app.enableCors(corsOptions)
  await app.listen(process.env.PORT ?? 3000)
  console.log(`Server running on port ${process.env.PORT ?? 3000}`)
}
void bootstrap()
