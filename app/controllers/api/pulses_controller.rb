require 'rest-client'

class Api::PulsesController < ApplicationController
  URL = "https://otx.alienvault.com/api/v1/pulses/subscribed?page=1" 

  def index
    #byebug
    req = RestClient.get(URL, headers={"X-OTX-API-KEY": ENV['OTX_API_KEY']}) 
    render :json => req
  end

end
