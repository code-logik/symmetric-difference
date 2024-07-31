class SymmetricDifference
{
    #sets;
    #symmetric_difference;

    constructor(args)
    {
        this.#symmetric_difference = args[0];
        this.#sets = args.slice(1);
    }

    getSymmetricDifference()
    {
        for(let i = 0; i < this.#sets.length; i++)
        {
            this.#calculate(this.#sets[i]);
        }

        return this.#symmetric_difference.sort();
    }

    #calculate(arg)
    {
        this.#symmetric_difference = [...new Set(this.#symmetric_difference)];
        arg = [...new Set(arg)];

        for(let i = 0; i < arg.length; i++)
        {
            if(this.#isUnique(arg[i]))
            {
                this.#symmetric_difference.push(arg[i]);
            }
            else
            {
                this.#symmetric_difference = this.#symmetric_difference.filter(number => number !== arg[i]);
            }
        }
    }

    #isUnique(arg)
    {
        if(this.#symmetric_difference.includes(arg))
        {
            return false;
        }
        else
        {
            return true;
        }
    }
}

module.exports = SymmetricDifference;