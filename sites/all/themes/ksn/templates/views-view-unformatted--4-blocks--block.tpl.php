<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */

$results = $view->result;
?>

<?php foreach ($results as $id => $result): ?>
  <div<?php if ($classes_array[$id]) { print ' class="' . $classes_array[$id] .'"';  } ?>>
    <?php print l('', 'node/' . $result->nid, array('attributes' => array('class' => array('link')))); ?>
    <div class="wrapper">
      <div class="views-field-title">
        <?php print l($result->node_title, 'node/' . $result->nid); ?>
      </div>
      <?php print $result->field_body[0]['rendered']['#markup']; ?>
    </div>
  </div>
<?php endforeach; ?>