import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

//import de typeorm
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientModule } from './client/client.module';
import { Client } from './entities/Client';
import { ChangementStatut } from './entities/ChangementStatut';
import { Commande } from './entities/Commande';
import { Couleur } from './entities/Couleur';
import { DetailsMontre } from './entities/DetailsMontre';
import { Genre } from './entities/Genre';
import { Marque } from './entities/Marque';
import { Matiere } from './entities/Matiere';
import { Montre } from './entities/Montre';
import { Mouvement } from './entities/Mouvement';
import { Roles } from './entities/Roles';
import { Statut } from './entities/Statut';
import { Style } from './entities/Style';
import { MontreModule } from './montre/montre.module';
import { GenreModule } from './genre/genre.module';
import { CommandeModule } from './commande/commande.module';
import { MarqueModule } from './marque/marque.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: '127.0.0.1', // Vérifiez que c'est bien localhost si votre DB est locale
      port: 3307, // Assurez-vous que le port est correct
      username: 'emporium', // Vérifiez le nom d'utilisateur
      password: 'DumB0__2500!', // Vérifiez le mot de passe
      database: 'db_emporium', // Vérifiez le nom de la base de données
      synchronize: false,
      entities: [
        ChangementStatut,
        Client,
        Commande,
        Couleur,
        DetailsMontre,
        Genre,
        Marque,
        Matiere,
        Montre,
        Mouvement,
        Roles,
        Statut,
        Style,
      ],
    }),
    ClientModule,
    MontreModule,
    GenreModule,
    CommandeModule,
    MarqueModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
