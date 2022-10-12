class AddPulseReferencesToReference < ActiveRecord::Migration[5.1]
  def change
    add_reference :references, :pulse, foreign_key: true
  end
end
