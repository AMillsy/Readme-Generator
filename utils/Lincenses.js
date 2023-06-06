const licenses = [
  {
    name: "Apache 2.0",
    badge: "Apache_2.0",
    link: "https://choosealicense.com/licenses/apache-2.0/",
  },
  {
    name: "GNU 3.0",
    badge: "GPLv3",
    link: "https://choosealicense.com/licenses/gpl-3.0/",
  },
  {
    name: "MIT",
    badge: "MIT",
    link: "https://choosealicense.com/licenses/mit/",
  },
  {
    name: "BSD 2-Clause",
    badge: "BSD_2--Clause",
    link: "https://opensource.org/license/bsd-2-clause/",
  },
  {
    name: "BSD 3-Clause",
    badge: "BSD_3--Clause",
    link: "https://opensource.org/license/bsd-3-clause/",
  },
  {
    name: "Boost software License",
    badge: "Boost_1.0",
    link: "https://www.boost.org/users/license.html",
  },
  {
    name: "Creative Commons Zero",
    badge: "CC0-1.0",
    link: "https://creativecommons.org/publicdomain/zero/1.0/",
  },
];

function findLincense(license) {
  for (const curLicense of licenses) {
    if (curLicense.name === license) return curLicense;
  }
}

function getBadge(license) {
  return findLincense(license).badge;
}
function getLink(license) {
  return findLincense(license).link;
}

module.exports = {
  findLincense,
  getBadge,
  getLink,
};
