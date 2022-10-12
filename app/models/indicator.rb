class Indicator < ApplicationRecord
  belongs_to :pulse, optional: true
end
