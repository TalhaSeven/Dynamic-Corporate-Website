
# Dynamic Corporate Website

This project is a sophisticated web application built using React, Redux Toolkit, and Node.js, designed for dynamic content management and presentation. It leverages Redux for state management and persists state across sessions, with a focus on handling multi-language content, site configurations, and dynamic page rendering based on API data.

## Features

- Dynamic content rendering based on API responses.
- Multi-language support with language-specific content management.
- Dynamic menu generation and content organization.
- Redux Toolkit for efficient state management.
- Redux Persist for state persistence across sessions.
- Integration with external APIs for content and translations.
- Modular component architecture for easy maintenance and scalability.

## Usage

- The application initializes with a main `App` component that sets up Redux providers and routing.
- Content rendering is dynamic based on the state managed by Redux, and API responses dictate the components to be rendered.
- The application supports multi-language content, allowing users to switch languages, which is managed by the Redux state.
- Each component (like `Slider`, `BreadCrumb`, `Component1`, etc.) represents a specific piece of the UI.

## Directory Structure

- `src/components`: Contains all reusable components.
- `src/features`: Holds Redux slices for different functionalities like Menu, API data, Site data, etc.
- `src/pages`: Page components like `Content` that use the components from `src/components`.
- `src/app`: Includes store configuration and Redux persistence setup.


---


# Dinamik Kurumsal Web Sitesi

Bu proje, React, Redux Toolkit ve Node.js kullanılarak geliştirilmiş, API verilerine dayalı dinamik içerik sunumu ve yönetimi için tasarlanmış sofistike bir web uygulamasıdır. Redux durum yönetimi ve oturumlar arası durumun korunması için Redux Persist kullanılmakta, çoklu dil desteği ile içerik, site konfigürasyonları ve dinamik sayfa işleme özelliklerine odaklanmaktadır.

## Özellikler

- API yanıtlarına dayalı dinamik içerik işleme.
- Çoklu dil desteği ile dil bazlı içerik yönetimi.
- Dinamik menü oluşturma ve içerik organizasyonu.
- Etkili durum yönetimi için Redux Toolkit kullanımı.
- Oturumlar arası durum koruması için Redux Persist.
- İçerik ve çeviriler için harici API'ler ile entegrasyon.
- Kolay bakım ve ölçeklenebilirlik için modüler bileşen mimarisi.

## Kullanım

- Uygulama, Redux sağlayıcılarını ve yönlendirmeyi ayarlayan ana `App` bileşeni ile başlar.
- İçerik işleme, Redux tarafından yönetilen duruma ve API yanıtlarına göre dinamiktir.
- Uygulama, Redux durumu tarafından yönetilen çoklu dil içeriğini destekler.
- `Slider`, `BreadCrumb`, `Component1` vb. her bileşen UI'nın belirli bir parçasını temsil eder.

## Dizin Yapısı

- `src/components`: Tüm yeniden kullanılabilir bileşenleri içerir.
- `src/features`: Menü, API verileri, Site verileri vb. gibi farklı işlevler için Redux dilimlerini barındırır.
- `src/pages`: `Content` gibi `src/components`tan bileşenleri kullanan sayfa bileşenleri.
- `src/app`: Mağaza konfigürasyonunu ve Redux kalıcılık ayarını içerir.

---