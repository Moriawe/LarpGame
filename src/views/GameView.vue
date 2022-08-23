<script>
export default {
  data() {
    return {
      subjects: "",
      answers: "",
      startQuiz: false,
      currentUI: 0,
      maxAmount: this.$store.state.characters.length,
      askedQuestions: [],
      setOfAnswers: [],
    }
  },
  methods: {
    chose() {
      this.startQuiz = true
      console.log(this.subjects)
      console.log(this.answers)
      //this.getAnswers()
    },
    getAnswers() {
      let randomNumbers = []
      randomNumbers.push(this.currentUI)
      console.log(randomNumbers)

      do {
        Math.floor(Math.random() * this.maxAmount)
      } while (randomNumbers.length < 4)

      this.setOfAnswers = [
        this.$store.state.characters[randomNumbers[0]][this.answers],
        this.$store.state.characters[randomNumbers[1]][this.answers],
        this.$store.state.characters[randomNumbers[2]][this.answers],
      ]
    },
  },
  computed: {
    questions() {
      return Object.keys(this.$store.state.characters[0])
    },
    newQuestion() {
      let max = this.maxAmount - 1
      let number = 0

      do {
        number = Math.floor(Math.random() * max)
      } while (this.askedQuestions.includes(number))

      this.askedQuestions.push(number)
      console.log(number)
      console.log(this.askedQuestions)
      this.currentUI = number
      //this.currentUI = this.$store.state.characters[number].UI

      return this.$store.state.characters[number][this.subjects]
    },
    //This one is not working ATM but need to be working, safer!
    newQuestion2() {
      let number = 0

      do {
        number = Math.floor(Math.random() * this.maxAmount)
      } while (this.askedQuestions.includes(number))

      this.askedQuestions.push(number)
      this.currentUI = number

      console.log(
        this.$store.state.characters.find((x) => x.UI === this.currentUI)
      )

      return 0
    },
    // Trying to work with the UI instead of arrayindex
    showAnswers2() {
      let rightAnswer = this.$store.state.characters.find(
        (x) => x.UI === this.currentUI
      )
      return rightAnswer
    },
  },
}
</script>

<style>
body {
  font-family: "Muli", sans-serif;
  line-height: 1.8;
  font-weight: 100;
  font-size: 16px;
  margin: 0px;
}

.button:link,
.button:visited {
  color: #fff;
  text-decoration: none;
}

#header {
  background-color: black;
  color: white;
  line-height: 1.1;
  font-weight: bold;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 15px;
}

#headerLogo {
  font-size: 30px;
  display: block;
}

#quiz {
}
</style>

<template>
  <div id="header">
    <a
      id="headerLogoWrapper"
      class="button"
      href="https://ensemble.nu/index.html"
    >
      <span id="headerLogo">Ensemble</span>
      <span id="headerLogoSub">A larp character tool</span>
    </a>
  </div>

  <div id="quizSetUp" v-if="!startQuiz">
    <p>Quiz setup</p>

    <p>Chose between the following as questions:</p>
    <div v-for="objects in questions" :key="objects.UI">
      <input
        type="radio"
        :id="objects"
        :value="objects"
        v-model="subjects"
      /><label>{{ objects }}</label>
    </div>

    <p>Chose between the following as answers:</p>
    <div v-for="objects in questions" :key="objects.UI">
      <input
        type="radio"
        :id="objects"
        :value="objects"
        v-model="answers"
      /><label>{{ objects }}</label>
    </div>

    <div>Checked subjects: {{ subjects }}</div>
    <div>Checked answers: {{ answers }}</div>
    <input type="button" value="Start Quiz" @click="chose" />
  </div>

  <div id="quiz" v-if="startQuiz">
    <p>Quiz</p>
    <p>{{ subjects }}:</p>
    <p>{{ newQuestion }}</p>
  </div>
  <div id="answers">
    <p>Answer</p>
    <p>{{ showAnswers2 }}</p>
  </div>
</template>
