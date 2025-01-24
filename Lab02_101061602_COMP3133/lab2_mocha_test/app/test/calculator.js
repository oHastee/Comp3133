const { expect } = require('chai');
const { add, sub, mul, div } = require('../calculator');

describe('Calculator Tests', function() {
    // ADDITION TESTS
    describe('add()', function() {
        it('5 + 2 should return 7 (PASS)', function() {
            expect(add(5, 2)).to.equal(7);
        });

        it('5 + 2 should NOT return 8 (FAIL)', function() {
            expect(add(5, 2)).to.equal(8); // This test will intentionally fail
        });
    });

    // SUBTRACTION TESTS
    describe('sub()', function() {
        it('5 - 2 should return 3 (PASS)', function() {
            expect(sub(5, 2)).to.equal(3);
        });

        it('5 - 2 should NOT return 5 (FAIL)', function() {
            expect(sub(5, 2)).to.equal(5); // This test will intentionally fail
        });
    });

    // MULTIPLICATION TESTS
    describe('mul()', function() {
        it('5 * 2 should return 10 (PASS)', function() {
            expect(mul(5, 2)).to.equal(10);
        });

        it('5 * 2 should NOT return 12 (FAIL)', function() {
            expect(mul(5, 2)).to.equal(12); // This test will intentionally fail
        });
    });

    // DIVISION TESTS
    describe('div()', function() {
        it('10 / 2 should return 5 (PASS)', function() {
            expect(div(10, 2)).to.equal(5);
        });

        it('10 / 2 should NOT return 2 (FAIL)', function() {
            expect(div(10, 2)).to.equal(2); // This test will intentionally fail
        });
    });
});