<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<br />
<p align="center">
    Generates a website of GhostNet information.
    <br />
    <a href="https://loquacious-chebakia-ba6931.netlify.app/">View Demo</a>
</p>

## About The Project

S2 Underground is developing the concept of [GhostNet](https://github.com/s2underground/GhostNet), a
collection of communications networks set up to allow users around the world to
exchange information without relying on pre-established infrastructure. I really like
the idea, and the 4" x 6" PDF document he publishes is very useful, but I would also
like the information to be available as a website and in a variety of standard print sizes.

This project builds a website containing S2 Underground's GhostNet information. The
generated website will eventually include the ability to download PDFs of the information
in a variety of standard sizes.

I am not affiliated with S2 Underground, so any feedback on GhostNet as a project
should be directed toward the creator of [that project](https://github.com/s2underground/GhostNet).

### Built With

* [![Eleventy][Eleventy.js]][Eleventy-url]
* [![Vivliostyle][Vivliostyle]][Vivliostyle-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

### Prerequisites

* Node.js

You can check whether you have Node installed by running `node --version` in
a terminal window. If the command is not found, or it reports a number lower than 14,
you will need to [download and install Node.js](https://nodejs.org/en/download) before continuing.

* git

You can check whether you have git installed by running `git --version` in a
terminal window. If the command is not found, you will need to [download and install git](https://git-scm.com/downloads)
before continuing.

### Installation

1. Clone the repo
   ```shell
   git clone https://github.com/TurnerSoftwareDev/GhostNet.git
   cd GhostNet
   ```
2. Install NPM packages (this takes a while)
   ```shell
   npm install
   ```
3. Run locally for developing the website
   ```shell
   npm start
   ```
   Then navigate in your browser to http://localhost:8080. Your browser will
   automatically load any changes you make while developing, so you don't have to keep hitting the
   refresh button.
4. Generate website assets and PDFs for deployment
   ```shell
   npm run build
   ```
   The website assets to deploy will be found in the `_site` directory.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Roadmap

- [x] Generate a website with content from the first two pages of S2U's PDF
- [ ] Create a 4" x 6" printable PDF from the website
- [ ] Add the remaining content to the website from S2U's PDF
- [ ] Set up a domain name for the website
- [ ] Create additional standard-size printable PDFs from the website
    - [ ] A5
    - [ ] A4
    - [ ] Wallet size

See the [open issues](https://github.com/TurnerSoftwareDev/GhostNet/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Software is distributed under the ISC License. See `LICENSE.txt` for more information.

Rights to the content (i.e. written text) about GhostNet are retained by S2 Underground.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

Eric Turner - [@EricTheTurner](https://twitter.com/EricTheTurner) - eric@ericturner.dev

Project Link: [https://github.com/TurnerSoftwareDev/GhostNet](https://github.com/TurnerSoftwareDev/GhostNet)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Acknowledgments

* [@s2underground (GitHub)](https://github.com/s2underground/GhostNet)
* [@S2Underground (YouTube)](https://www.youtube.com/c/S2Underground)
* [@s2_underground (X)](https://twitter.com/s2_underground)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/TurnerSoftwareDev/GhostNet.svg?style=for-the-badge
[contributors-url]: https://github.com/TurnerSoftwareDev/GhostNet/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/TurnerSoftwareDev/GhostNet.svg?style=for-the-badge
[forks-url]: https://github.com/TurnerSoftwareDev/GhostNet/network/members
[stars-shield]: https://img.shields.io/github/stars/TurnerSoftwareDev/GhostNet.svg?style=for-the-badge
[stars-url]: https://github.com/TurnerSoftwareDev/GhostNet/stargazers
[issues-shield]: https://img.shields.io/github/issues/TurnerSoftwareDev/GhostNet.svg?style=for-the-badge
[issues-url]: https://github.com/TurnerSoftwareDev/GhostNet/issues
[license-shield]: https://img.shields.io/github/license/TurnerSoftwareDev/GhostNet.svg?style=for-the-badge
[license-url]: https://github.com/TurnerSoftwareDev/GhostNet/blob/master/LICENSE.txt
[Eleventy.js]: https://img.shields.io/badge/11ty-000000?style=for-the-badge
[Eleventy-url]: https://www.11ty.dev
[Vivliostyle]: https://img.shields.io/badge/Vivliostyle-1F4BF8?style=for-the-badge
[Vivliostyle-url]: https://vivliostyle.org