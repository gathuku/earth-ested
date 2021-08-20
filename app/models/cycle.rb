class Cycle < ApplicationRecord
  # Constants
  # Includes
  # Asssociation
  # Scopes
  # Attributes

  attribute :components

  # Accessors
  # Validations
  # Class methods / Singleton Methods
  # Instance methods
  def total_impact
    component_total(components)
  end

  private

  # Get the total impacts value of a components with recursion
  def component_total(components, total = 0)
    components.each do |comp|
      total += impact_total(comp) if comp['impacts'].present?
      total += component_total(comp['components']) if comp['components'].present?
    end
    total
  end

  def impact_total(comp)
    comp['impacts'].values.map(&:to_i).sum
  end
end
