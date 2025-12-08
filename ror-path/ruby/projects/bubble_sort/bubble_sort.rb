def bubble_sort(arr)
  l = arr.length - 1
  while (l >= 0)
  i = 0
  j = 1
    while (i < l)
      if arr[i] > arr[j]
        tmp = arr[i]
        arr[i] = arr[j]
        arr[j] = tmp
      end
      i += 1
      j += 1
    end
    l -= 1
  end
  arr
end

arr = [16, 14, 10, 8, 7, 8, 3, 2, 4, 1]

p bubble_sort(arr)
