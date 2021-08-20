class Cycle < ApplicationRecord
  attribute :components
  # accepts_nested_attributes_for :components

  # Instance methods

  def total_impact
    total = 0
    components.each do |comp|
      total += comp['impacts'].values.map(&:to_i).sum
    end
    total
  end
end
