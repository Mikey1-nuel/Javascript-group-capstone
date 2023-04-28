import getData from '../countcomment.js';

describe('Should render the exact comment count', () => {
  it('Should render 5 comments in the list', () => {
    const commentCount = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

    expect(getData(commentCount, commentCount)).toEqual(5);
  });
});