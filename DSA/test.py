def romanToInt( s: str) -> int:
        hash_map = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000,
        }
        addition_list = [] 
        sum = 0
        for c in s[::-1]:
                integer = hash_map[c]
                addition_list.append(integer)
        for i in range(len(addition_list)):
                if(i >= 1):
                        prev = addition_list[i-1]
                        current = addition_list[i]
                        if( prev > current ):  
                                sum += prev - current
                        else:
                                sum += current
                else:
                        sum += addition_list[i]
        return sum

print(romanToInt("III"))