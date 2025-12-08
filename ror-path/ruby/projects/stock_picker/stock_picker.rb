def stock_picker(arr)
  res = [0, 1]
  diff = 0
  arr.each_with_index do |price, index|
    if (arr[res[0]] > price && index < (arr.length - 1) && res[0] <= res[1])
      i = 1
      while (index + i < arr.length - 1)
        if (arr[index + i] - arr[index] > diff)
          res[0] = index
          diff = arr[index + i] - arr[index]
          res[1] = index + i
        end
        i += 1
      end
    end
  end
  res
end

price = [1,30,6,9,15,8,6,1,10] 
p tmp = stock_picker(price)

p "Buy price is: $" + price[tmp[0]].to_s
p "Sell price is: $" + price[tmp[1]].to_s
p "Profit: $" + (price[tmp[1]] - price[tmp[0]]).to_s

