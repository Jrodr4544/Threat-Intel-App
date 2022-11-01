require 'rest-client'

class Api::PulsesController < ApplicationController
  URL = "https://otx.alienvault.com/api/v1/pulses/subscribed?page=1" 

  def index
    #byebug
    pulses_from_otx = RestClient.get(URL, headers={"X-OTX-API-KEY": ENV['OTX_API_KEY']}) 
    JSON.parse(pulses_from_otx).first[1].each do |pulse|
        object = Pulse.find_or_create_by!(
          description: pulse['description'],
          author_name: pulse['author_name'],
          tlp:  pulse['tlp'],
          adversary: pulse['adversary'],
          name: pulse['name']
        ) 

        pulse['indicators'].each do |indicator|
          object.indicators << Indicator.find_or_create_by!(
            value: indicator['indicator'],
            category: indicator['type']
          )   
        end

        pulse['tags'].each do |tag|
          object.tags << Tag.find_or_create_by!(
            title: tag
          )
        end

        if pulse['targeted_countries'].length > 0
          pulse['targeted_countries'].each do |targeted_country|
            object.targeted_countries << TargetedCountry.find_or_create_by!(
              name: targeted_country
            )
          end
        end

        if pulse['malware_families'].length > 0
          pulse['malware_families'].each do |malware_family|
            object.malware_families << MalwareFamily.find_or_create_by!(
              name: malware_family 
            )
          end
        end

        if pulse['industries'].length > 0
          pulse['industries'].each do |industry|
            object.industries << Industry.find_or_create_by!(
              title: industry
            )
          end
        end

        if pulse['references'].length > 0
          pulse['references'].each do |reference|
            object.references << Reference.find_or_create_by!(
              resource: reference 
            )
          end
        end

        object.save!
    end
    
    @pulses = Pulse.all

    render :json => @pulses, include: ['indicators', 'tags', 'malware_families', 'industries', 'references', 'targeted_countries']
  end

end
