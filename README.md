# Turisme Girona - Projecte Web Multimèdia

Aquest projecte és una Single Page Application (SPA) desenvolupada amb **React** que té com a objectiu promocionar el turisme a la ciutat de Girona, destacant el seu patrimoni històric, cultural i natural mitjançant l'ús d'elements multimèdia interactius.

## 📋 A. Estructura de la Pàgina (Wireframe)

L'aplicació segueix una estructura vertical fluida dividida en quatre seccions principals:

1.  **Barra de Navegació (Navbar):** Fixa a la part superior, conté el logotip i els enllaços a les diferents seccions (Inici, Activitats, Multimèdia).
2.  **Secció Hero:** La portada d'impacte visual. Utilitza un vídeo de fons a pantalla completa amb un títol i subtítol superposats per captar l'atenció de l'usuari immediatament.
3.  **Contingut Principal (Activitats i Multimèdia):**
    * Una llista d'activitats destacades.
    * Una galeria multimèdia organitzada en columnes (Flexbox) que integra imatge, vídeo i àudio.
4.  **Peu de Pàgina (Footer):** Informació de contacte, enllaços a xarxes socials i crèdits del desenvolupador.

## Media 🎨 B. Funcionalitats i Elements Multimèdia

El projecte integra i gestiona diferents formats de fitxers, optimitzats per a la web:

* **Imatge (Cases de l'Onyar):** S'ha utilitzat una fotografia en format `.png`, editada prèviament per ajustar-ne la mida i la colorimetria, servint com a referència visual estàtica del Barri Vell.
* **Vídeo (Passeig Visual):** S'ha implementat un reproductor de vídeo HTML5.
    * Al component *Hero*, el vídeo es reprodueix automàticament en bucle (`loop`), sense so (`muted`) i sense controls per actuar com a fons dinàmic.
    * A la secció *Multimèdia*, el vídeo inclou controls de reproducció perquè l'usuari pugui interactuar-hi. El fitxer ha estat retallat i comprimit per garantir una càrrega ràpida.
* **Àudio (Ambient Natural):** S'ha afegit un reproductor d'àudio que permet a l'usuari escoltar sons ambientals de la ciutat i la natura (Parc de la Devesa), completant l'experiència immersiva.

## 🛠️ C. Desenvolupament Tècnic

El projecte ha estat creat utilitzant l'entorn de treball **React**:

* **Components:** S'ha modularitzat el codi en components reutilitzables (`Hero.js`, `Multimedia.js`, `Navbar.js`) per mantenir el codi net i escalable.
* **Gestió d'Actius:** Tots els fitxers multimèdia s'han centralitzat a la carpeta `src/assets/` per facilitar-ne la importació i l'organització.
* **Estils:** S'ha utilitzat CSS pur amb `Flexbox` per assegurar que la distribució dels elements sigui responsive i s'adapti a diferents mides de pantalla.
* **Optimització:** Per a l'entrega del projecte, s'ha eliminat la carpeta `node_modules` per reduir dràsticament el pes del fitxer comprimit, mantenint els fitxers de configuració `package.json` intactes per a la seva posterior reinstal·lació.

---

### 🚀 Instruccions d'Instal·lació

Per executar aquest projecte en local, segueix aquests passos:

1.  Descomprimeix el fitxer del projecte.
2.  Obre la terminal a l'arrel de la carpeta.
3.  Instal·la les dependències (es crearà de nou la carpeta `node_modules`):
    ```bash
    npm install
    ```
4.  Executa l'aplicació:
    ```bash
    npm start
    ```
5.  Obre [http://localhost:3000](http://localhost:3000) al teu navegador.

---
**Autor:** [El teu Nom i Cognom]
**Assignatura:** Disseny d'Interfícies Web / Multimèdia
