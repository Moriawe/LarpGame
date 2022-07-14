import { createStore } from "vuex"

const mutations = {
    addPoints(state, points) {
      state.points += points
    },
  },
  state = {
    points: "",
    characters: [
      {
        UI: 1,
        character: "Frodo",
        description: "You can walk into Mordor",
        universa: "Lord of the Rings",
        equipment: ["Sting", "The Ring", "Chainmail of Mithril"],
        role: ["hero", "drama"],
      },
      {
        UI: 2,
        character: "Gimli",
        description: "No friend of elves, but a good sprinter",
        universa: "Lord of the Rings",
        equipment: ["none"],
        role: ["sidekick", "comedy", "fighting"],
      },
      {
        UI: 3,
        character: "Pippin",
        description: "They should've thrown him into the well",
        universa: "Lord of the Rings",
        equipment: ["none"],
        role: ["sidekick", "comedy"],
      },
      {
        UI: 4,
        character: "Spock",
        description: "Logic, and no feelings",
        universa: "Star Trek",
        equipment: ["none"],
        role: ["sidekick", "drama"],
      },
      {
        UI: 5,
        character: "Kirk",
        description: "The greatest commander. Period",
        universa: "Star Trek",
        equipment: ["none"],
        role: ["hero", "love interest", "fighting"],
      },
      {
        UI: 6,
        character: "Borg",
        description: "Resistance is futile",
        universa: "Star Trek",
        equipment: ["none"],
        role: ["villain", "fighting"],
      },
      {
        UI: 7,
        character: "Han Solo",
        description:
          "You like me because I'm a scoundrel. There aren't enough scoundrels in your life.",
        universa: "Star Wars",
        equipment: ["Millenium Falcon"],
        role: ["hero", "love interest", "comedy", "fighting"],
      },
      {
        UI: 8,
        character: "Boromir",
        description:
          "It Is A Strange Fate That We Should Suffer So Much Fear And Doubt Over So Small A Thing.",
        universa: "Lord of the Rings",
        equipment: ["none"],
        role: ["sidekick", "drama", "cannon fodder", "fighting"],
      },
      {
        UI: 9,
        character: "Palpatine / The Emperor",
        description: "Everything is proceeding as I have foreseen",
        universa: "Star Wars",
        equipment: ["The Force"],
        role: ["villain", "drama"],
      },
      {
        UI: 10,
        character: "C-3PO",
        description: "Sometimes, I just don't understand human behaviour.",
        universa: "Star Wars",
        equipment: ["none"],
        role: ["comedy"],
      },
      {
        UI: 11,
        character: "Luke Skywalker",
        description:
          "No, my father didn’t fight in the Clone Wars. He was a navigator on a spice freighter",
        universa: "Star Wars",
        equipment: ["Lightsaber", "The Force"],
        role: ["hero", "fighting"],
      },
      {
        UI: 12,
        character: "Spiderman",
        description: "Can't hold down a job to save his private life",
        universa: "Marvel",
        equipment: ["Web"],
        role: ["hero", "love interest", "comedy", "fighting"],
      },
      {
        UI: 13,
        character: "The Hulk",
        description: "Hulk smash things",
        universa: "Marvel",
        equipment: ["none"],
        role: ["fighting"],
      },
    ],
  }

export default createStore({ mutations, state, strict: true })
