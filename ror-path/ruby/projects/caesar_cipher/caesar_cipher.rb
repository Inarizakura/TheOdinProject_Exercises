def ucase_shift(char, shift, dir)
  if (dir == "right")
    ((char - 65 + shift) % 26) + 65
  elsif (dir == "left")
    ((char - 65 - shift) % 26) + 65
  end
end

def lcase_shift(char, shift, dir)
  if (dir == "right")
    ((char - 97 + shift) % 26) + 97
  elsif (dir == "left")
    ((char - 97 - shift) % 26) + 97
  end
end

def caesar_cipher(str, shift) 
  arr = str.bytes
  arr.each_with_index do |char, i|
    if ((char >= 65 && char <= 90) || (char >= 97 && char <= 122))
      if (char >= 65 && char <= 90)
        arr[i] = ucase_shift(char, shift, "right").chr
      elsif (char >= 97 && char <= 122)
        arr[i] = lcase_shift(char, shift, "right").chr
      end
    else
      arr[i] = char.chr
    end
  end
  puts arr.join("")
end

def caesar_cipher_left(str, shift)
  arr = str.bytes
  arr.each_with_index do |char, i|
    if ((char >= 65 && char <= 90) || (char >= 97 && char <= 122))
      if (char >= 65 && char <= 90)
        arr[i] = ucase_shift(char, shift, "left").chr
      elsif (char >= 97 && char <= 122)
        arr[i] = lcase_shift(char, shift, "left").chr
      end
    else
      arr[i] = char.chr
    end
  end
  puts arr.join("")
end

caesar_cipher("Hello, World!", 10)

caesar_cipher_left("Hello, World!", 10)
