# Emporium Watches - Backend API

Backend API développé en **Node.js** avec le framework **NestJS**, conçu pour l'application mobile **Emporium Watches** (version mobile du projet [emporium-watches](https://github.com/nemuoM/emporium-watches)).

## Installation

1. Clonez le repository :

   ```bash
   git clone https://github.com/nemuoM/emporium-back.git
   cd emporium-back
   ```

2. Installez les dépendances :

   ```bash
   npm install
   ```

3. Démarrez le serveur :

   ```bash
   npm run start
   ```

L'API est accessible sur `http://localhost:3000`.

### Même base de donnnées que [emporium-watches](https://github.com/nemuoM/emporium-watches).

## Fonctionnalités

- **Authentification** (JWT) : Inscription, connexion, déconnexion.
- **Gestion des produits** : Liste, détails, création, modification, suppression.
- **Commandes** : Création et gestion.
- **Catégories** : Gestion des catégories de montres.
