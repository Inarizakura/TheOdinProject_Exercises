def substrings(str, dict)
  arr = str.split(" ")
  res = {}
  dict.each do |word|
    arr.each do |s|
      if s.downcase.include?(word)
        if res.dig(word.to_sym) == nil
          res[word.to_sym] = 1
        else
          res[word.to_sym] += 1
        end
      end
    end
  end
  puts res
end

dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]
substrings("Howdy partner, sit down! How's it going?", dictionary)
