class Tag < ApplicationRecord
  belongs_to :pulse, optional: true
end
