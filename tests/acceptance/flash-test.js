import { test } from 'qunit'
import moduleForAcceptance from 'flash-testing/tests/helpers/module-for-acceptance'

moduleForAcceptance('Acceptance | flash')

test('can assert that flash messages are added', function(assert) {
  assert.expect(2)

  visit('/flash')
  click('button')

  andThen(() => {
    assert.equal(currentURL(), '/flash')
    assert.equal(find('.alert-success').text().trim(), 'Flash!')
  })
})
