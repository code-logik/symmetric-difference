const SymmetricDifference = require('./symmetric-difference-class.js');

class SymmetricDifferenceTest
{
    number_of_sets;

    #test_set = 0;
    #data_test_sets =
    [
        [
            [1, 2, 3], [5, 2, 1, 4, 5], [3, 4, 5]
        ],
        [
            [1, 2, 5], [2, 3, 5], [3, 4, 5], [1, 4, 5]
        ],
        [
            [1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5], [1, 4, 5]
        ],
        [
            [3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [2, 3, 4, 6, 7]
        ],
        [
            [3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1], [1, 2, 4, 5, 6, 7, 8, 9]
        ]
    ];

    constructor()
    {
        this.number_of_sets = this.#data_test_sets.length;
    }

    GetDataTestSet()
    {
        if(this.#test_set < this.#data_test_sets.length)
        {
            return this.#data_test_sets[this.#test_set++];
        }
        else
        {
            return null;
        }
    }
}

const symmetric_difference_test = new SymmetricDifferenceTest();


for(let i = 0; i < symmetric_difference_test.number_of_sets; i++)
{
    let data_test_set = symmetric_difference_test.GetDataTestSet();

    if(data_test_set != null)
    {
        let symmetric_difference = new SymmetricDifference(data_test_set.slice(0, -1));
        let result = symmetric_difference.getSymmetricDifference();
        let expected_result = data_test_set.slice(-1);

        console.log("Result:   [ " + result + " ]\nExpected: [ " + expected_result + " ]");
    }
}