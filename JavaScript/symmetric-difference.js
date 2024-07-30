function sortArray(...args)
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

function isUnique(control, group)
{
    if (group.includes(control))
    {
        return false;
    }
    else
    {
        return true;
    }
}

function symmetricDifference(...args)
{
    let symmetric_difference = [...new Set(args[0])];
    args[1] = [...new Set(args[1])];
    
    for(let i = 0; i < args[1].length; i++)
    {
        if(isUnique(args[1][i], symmetric_difference))
        {
            symmetric_difference.push(args[1][i]);
        }
        else
        {
            symmetric_difference = symmetric_difference.filter(num => num !== args[1][i]).slice();
        }
    }

    return symmetric_difference.sort(sortArray);
}

function sym(...args)
{
    let symmetric_difference = args[0];

    for (let i = 1; i < args.length; i++)
    {
        symmetric_difference = symmetricDifference(symmetric_difference, args[i]).slice();
    }

    return symmetric_difference;
}

console.log(sym([1, 2, 3], [5, 2, 1, 4, 5], [0, 9, 15, 1, 4, 81]));


