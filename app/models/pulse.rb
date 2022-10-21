class Pulse < ApplicationRecord
  validates :name, uniqueness: true
  has_many :references
  has_many :indicators
  has_many :tags
  has_many :targeted_countries
  has_many :malware_families
  has_many :industries
end
