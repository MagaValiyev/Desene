# Desene

> Desene is a cross-platform social media application being developed for the TEKNOFEST NSosyal competition.

The project is currently in its initial research and development stage. Its functionality is still being researched and designed.

## Tech Stack

- React Native
- TypeScript
- Android
- iOS

## Development Environment

- Primary development environment: Ubuntu Linux
- Android: Android Studio and Android SDK
- iOS: macOS and Xcode

## Getting Started

Clone the repository and install its dependencies:

```bash
git clone <repository-url>
cd Desene
npm install
```

Start Metro:

```bash
npm start
```

In a separate terminal, build and run the Android app on an emulator or connected device:

```bash
npm run android
```

### iOS

iOS builds require macOS and Xcode. On macOS, install the Ruby and CocoaPods dependencies after `npm install`:

```bash
bundle install
cd ios
bundle exec pod install
cd ..
npm run ios
```

## Project Structure

- `src/components` — Reusable UI components
- `src/screens` — Application screens
- `src/services` — External service integrations
- `src/hooks` — Reusable React hooks
- `src/utils` — Shared utility functions
- `src/constants` — Shared constants
- `src/types` — Shared TypeScript types

## Project Status

`Initial development / research stage`

Product functionality and application architecture will evolve as the team finalizes its ideas and the TEKNOFEST NSosyal requirements.

## Competition

**Desene is being developed as part of the TEKNOFEST NSosyal competition.**

## Team

Developed by the Desene team for the TEKNOFEST NSosyal competition.
