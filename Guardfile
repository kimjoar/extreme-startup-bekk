guard "shell" do
  # Regexp watch patterns are matched with Regexp#match
  watch(%r{^test/(.+)_test\.js$}) do |m|
    `expresso test/#{m[1]}_test.js`
  end

  watch(%r{^lib/(.+)\.js$}) do |m|
    `expresso test/#{m[1]}_test.js`
  end
end
