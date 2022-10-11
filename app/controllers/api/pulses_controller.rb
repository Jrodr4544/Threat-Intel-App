class Api::PulsesController < ApplicationController
  
  def index
    render html: '<div>HELLO, THIS IS THE INDEX PAGE</div>'.html_safe
  end

end
