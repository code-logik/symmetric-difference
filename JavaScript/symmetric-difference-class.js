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
            this.#symmetric_difference = this.#calculate(this.#sets[i]);
        }

        return this.#symmetric_difference;
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

        return this.#symmetric_difference.sort(this.#sortSet);
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

    #sortSet(...args)
    {
        if(args[0] === args[1])
        {
            return 0;
        }
        else
        {
            return (args[0] < args[1]) ? -1 : 1;
        }
    }
}

module.exports = SymmetricDifference;