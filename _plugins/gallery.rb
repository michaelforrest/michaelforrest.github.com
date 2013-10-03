class Gallery < Liquid::Tag
  Syntax = /^\s*([^\s]+)(\s+(\d+)\s+(\d+)\s*)?/
  def initialize tagName, markup, tokens
    super
    if markup =~ Syntax
      @dir = $1
      pattern = "images/#{@dir}/*.png"
      @files = Dir[pattern]
    else
      raise "Bad syntax used for Gallery plugin"
    end

  end

  def render(context)
    images = @files.map {|file|
      "<li class='thumbnail'><a title='#{File.basename(file, '.png')}' href='/#{file}'><img src='/#{file}'/></a></li>"
    }.join('')
    "<ul class='gallery thumbnails'>#{images}</ul>"
  end

  Liquid::Template.register_tag "gallery", self
end
