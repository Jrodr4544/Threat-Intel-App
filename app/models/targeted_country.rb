class TargetedCountry < ApplicationRecord
  belongs_to :pulse, optional: true
end
