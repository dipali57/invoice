import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'invoiceDate', async: true })
export class DateValidator implements ValidatorConstraintInterface {
  validate(invoiceDate: string) {
    if (typeof invoiceDate !== 'string') {
      return false;
    }

    if (invoiceDate) {
      const regex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;

      if (invoiceDate.match(regex) === null) {
        return false;
      }

      const date = new Date(invoiceDate);

      return date.toISOString().startsWith(invoiceDate);
    }
    return false;
  }
}
