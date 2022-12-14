describe('Blackjack', () => {
    const ace = { val: 11, displayVal: 'Ace', suit: 'hearts' };
    const two = { val: 2, displayVal: '2', suit: 'hearts' };
    const four = { val: 4, displayVal: '4', suit: 'hearts' };
    const five = { val: 5, displayVal: '5', suit: 'hearts' };
    const six = { val: 6, displayVal: '6', suit: 'hearts' };
    const nine = { val: 9, displayVal: '9', suit: 'hearts' };
    const ten = { val: 10, displayVal: '10', suit: 'hearts' };

    describe('dealerShouldDraw function', () => {
        it('No aces, dealer should not draw', () => {
            const expected = false;
            expect(dealerShouldDraw([ten, nine])).toEqual(expected);
        });
        it('1 soft ace, dealer should draw', () => {
            const expected = true;
            expect(dealerShouldDraw([ace, six])).toEqual(expected);
        });
        it('1 ace, not soft, dealer should not draw', () => {
            const expected = false;
            expect(dealerShouldDraw([ten, six, ace])).toEqual(expected);
        });
        it('No aces, dealer should draw', () => {
            const expected = true;
            expect(dealerShouldDraw([two, four, two, five])).toEqual(expected);
        });
    });    
});