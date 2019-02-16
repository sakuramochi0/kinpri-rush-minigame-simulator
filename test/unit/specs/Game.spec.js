import Game from '@/components/Game';

describe('shuffleArray', () => {
  it('should return a string same as the given one', () => {
    const message = 'abcde';
    const shuffledMessage = Game.methods.shuffleArray(message);
    expect(shuffledMessage.length).toBe(message.length);
  });
});

// describe('Game.vue', () => {
//   it('should render correct contents', () => {
//     const Constructor = Vue.extend(Game);
//     const vm = new Constructor().$mount();
//     expect(vm.$el.querySelector('p').textContent).toEqual(
//       'スタァを応援しよう！'
//     );
//   });
// });
