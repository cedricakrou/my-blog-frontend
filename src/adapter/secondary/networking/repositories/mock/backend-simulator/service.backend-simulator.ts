import { ServiceEntity } from "src/core/domain/entities/service.entities";
import { v4 as uuidv4 } from 'uuid';
import { ISimulator } from "./simulator";

export class ServiceSimulator implements ISimulator<ServiceEntity> {

    public softwareArchitecture: ServiceEntity = {
        id: uuidv4(),
        order: 1,
        title: "Software Architecture",
        imageUrl: "architecture.png",
        description: "Créez des applications côté client avec des fonctionnalités modernes telles que SPA et maintenez un style de codage sémantique parmi d'autres bonnes pratiques pour l'optimisation du référencement. Utilisez des technologies modernes telles que Nuxt (Vue.js), TailwindCSS et GSAP.",

     };

     public frontEndDevelopment: ServiceEntity = {
         id: uuidv4(),
         order: 2,
         title: "Frontend development",
         imageUrl: "frontend.png",
         description: "Créez des applications côté client avec des fonctionnalités modernes telles que SPA et maintenez un style de codage sémantique parmi d'autres bonnes pratiques pour l'optimisation du référencement. Utilisez des technologies modernes telles que Nuxt (Vue.js), TailwindCSS et GSAP."

     };

      public backendDevelopment: ServiceEntity = {
         id: uuidv4(),
         order: 3,
         title: "Backend development",
         imageUrl: "backend.png",
         description: "Créez des applications côté client avec des fonctionnalités modernes telles que SPA et maintenez un style de codage sémantique parmi d'autres bonnes pratiques pour l'optimisation du référencement. Utilisez des technologies modernes telles que Nuxt (Vue.js), TailwindCSS et GSAP."

     };

     public androidNatveDevelopment: ServiceEntity = {
         id: uuidv4(),
         order: 4,
         title: "Android Native development",
         imageUrl: "android.png",
         description: "Créez des applications côté client avec des fonctionnalités modernes telles que SPA et maintenez un style de codage sémantique parmi d'autres bonnes pratiques pour l'optimisation du référencement. Utilisez des technologies modernes telles que Nuxt (Vue.js), TailwindCSS et GSAP."

     };

     public flutterDevelopment: ServiceEntity = {
         id: uuidv4(),
         order: 5,
         title: "Flutter development",
         imageUrl: "flutter.png",
         description: "Créez des applications côté client avec des fonctionnalités modernes telles que SPA et maintenez un style de codage sémantique parmi d'autres bonnes pratiques pour l'optimisation du référencement. Utilisez des technologies modernes telles que Nuxt (Vue.js), TailwindCSS et GSAP."

     };


     public datas(): ServiceEntity[] {

        return [
            this.softwareArchitecture,
            this.frontEndDevelopment,
            this.backendDevelopment,
            this.androidNatveDevelopment,
            this.flutterDevelopment
         ];
    }
}
