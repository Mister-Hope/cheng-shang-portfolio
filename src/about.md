---
title: About Me
icon: circle-info
---

## Information

- Name: CHENG SHANG

- Affiliation: Department of Physics, The University of Tokyo.

- Contract:

  - <c-shang@iis.u-tokyo.ac.jp>
  - <cheng.shang@riken.jp>

- ORCID: <https://orcid.org/0000-0001-8393-2329>

## Education

<Experiences :items="experiences" />

<script setup lang="ts">
const experiences = [
  {
    type: 'study',
    place: "The University of Tokyo, Japan",
    title: "Ph.D.",
    time: "Oct. 2021 - Present",
    content: "Department of Physics<br>Expected to graduate in Sep 2024",
  },
  {
    type: 'study',
    place: "Students to Japan, China",
    time: "Oct. 2020 - Aug. 2021",
    content: "Preparatory School for Chinese<br>MEXT Doctoral Scholarship Candidate",
  },
  {
    type: 'study',
    place: "Northeast Normal University, China",
    time: "Sep. 2017 - June 2020",
    title: "Master of Science",
    description: "School of Physics",
  },
];
</script>
