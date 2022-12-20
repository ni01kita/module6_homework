    // task 2
    function test_prime(n) {
        if (n > 1000)
            return ('Число болше 1000')

        if (n===1)  {
            return false;
        }
        else if(n === 2)  {
            return true;
        } else   {
            for(var x = 2; x < n; x++)  {
                if(n % x === 0) {
                    return false;
                }
            }
            return 'Простое';
        }
    }

    console.log(test_prime(1001))
