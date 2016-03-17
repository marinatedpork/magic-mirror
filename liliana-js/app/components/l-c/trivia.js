import Ember from 'ember';
import ajax from 'ic-ajax';

const FADE_DELAY = 1000;
const TIME_TO_ANSWER = 15000;
const TIME_TO_NEXT_QUESTION = 21000;
const TRIVIA_URL = 'http://jservice.io/api/random?count=100';
const { Component } = Ember;

export default Component.extend({
  elementId    : 'trivia',
  showQuestion : true,
  showAnswer   : true,
  init() {
    this._super(...arguments);
    this.renderTrivia([]);
  },
  renderTrivia([question, ...tail]) {
    if (!question || !question.question) {
      return ajax(TRIVIA_URL).then(questions => this.renderTrivia(questions));
    }
    let { 
      question : { length : hasQuestion },
      answer   : { length : hasAnswer   }
    } = question;
    if (hasQuestion && hasAnswer) {
      question.answer = unescape(question.answer);
      this.toggleProperty('showQuestion');
      this.toggleProperty('showAnswer');
      setTimeout(this.renderQuestion.bind(this), FADE_DELAY, question);
      setTimeout(this.renderAnswer.bind(this), TIME_TO_ANSWER);
      setTimeout(this.renderTrivia.bind(this), TIME_TO_NEXT_QUESTION, tail);
    } else {
      this.renderTrivia(tail);
    }
  },
  renderQuestion(question) {
    this.set('question', question);
    this.toggleProperty('showQuestion');
  },
  renderAnswer() {
    this.toggleProperty('showAnswer');
  }
});
