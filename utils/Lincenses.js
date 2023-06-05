const licenses = [
  {
    name: "Apache 2.0",
    badge:
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    link: "https://choosealicense.com/licenses/apache-2.0/",
  },
  {
    name: "GNU 3.0",
    badge:
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    link: "https://choosealicense.com/licenses/gpl-3.0/",
  },
  {
    name: "MIT",
    badge:
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    link: "https://choosealicense.com/licenses/mit/",
  },
  {
    name: "BSD 2-Clause",
    badge:
      "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
    link: "https://opensource.org/license/bsd-2-clause/",
  },
  {
    name: "BSD 3-Clause",
    badge:
      "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    link: "https://opensource.org/license/bsd-3-clause/",
  },
  {
    name: "Boost software License",
    badge:
      "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    link: "",
  },
  {
    name: "Creative Commons Zero",
    badge:
      "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)",
    link: "https://creativecommons.org/publicdomain/zero/1.0/",
  },
];

function findLincense(license) {
  for (const curLicense of licenses) {
    if (curLicense.name === license) return curLicense;
  }
}

module.exports = findLincense;
