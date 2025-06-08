# Booking System Components

This booking system provides a complete solution for handling appointment bookings across your application.

## Components Included

- `BookingProvider`: Context provider for managing modal state
- `BookingForm`: Modal component with booking form
- `BookNowButton`: Flexible, multi-variant button component to trigger booking modal

## Setup

The booking system is already set up in the app layout (`src/app/layout.tsx`), so you can use the `BookNowButton` anywhere in your app.

## BookNowButton Variants

The `BookNowButton` component now supports multiple pre-designed variants for different use cases:

### Basic Usage

```tsx
import { BookNowButton } from "@/app/shared/components";

// Default primary variant
<BookNowButton />;
```

### Available Variants

#### 1. **Primary** (Default)

```tsx
<BookNowButton variant="primary">Book Appointment</BookNowButton>
```

- Pink to purple gradient background
- White text with shadow
- Perfect for main CTAs

#### 2. **Secondary**

```tsx
<BookNowButton variant="secondary">Schedule Visit</BookNowButton>
```

- White background with pink border
- Pink text
- Great for secondary actions

#### 3. **Outline**

```tsx
<BookNowButton variant="outline">Book Now</BookNowButton>
```

- Transparent background with pink border
- Fills with pink on hover
- Subtle but effective

#### 4. **Hero**

```tsx
<BookNowButton variant="hero" size="large">
  Book Free Consultation
</BookNowButton>
```

- Rounded pill shape
- Gradient background with enhanced shadow
- Perfect for hero sections

#### 5. **Minimal**

```tsx
<BookNowButton variant="minimal">Quick Booking</BookNowButton>
```

- Text-only appearance
- Minimal padding
- Great for inline content

#### 6. **Ghost**

```tsx
<BookNowButton variant="ghost">Book Now</BookNowButton>
```

- Semi-transparent background with blur effect
- Perfect for overlays or dark backgrounds

#### 7. **Gradient**

```tsx
<BookNowButton variant="gradient">Premium Booking</BookNowButton>
```

- Enhanced 3-color gradient
- Premium appearance with strong shadow
- For special promotions

#### 8. **Rounded**

```tsx
<BookNowButton variant="rounded">Book Today</BookNowButton>
```

- Fully rounded pill shape
- Solid pink background
- Clean, modern look

#### 9. **Custom**

```tsx
<BookNowButton
  variant="custom"
  style={{
    background: "your-custom-style",
    color: "your-color",
  }}
  className="your-custom-classes"
>
  Custom Button
</BookNowButton>
```

- No predefined styling
- Full control over appearance

### Additional Props

```tsx
<BookNowButton
  variant="primary" // Button variant
  size="large" // 'small' | 'middle' | 'large'
  block={false} // Full width button
  disabled={false} // Disable the button
  showIcon={true} // Show/hide calendar icon
  icon={<CustomIcon />} // Custom icon (overrides default)
  className="custom-class" // Additional CSS classes
  style={{ margin: "10px" }} // Additional inline styles
>
  Custom Text
</BookNowButton>
```

### Real-World Examples

#### Homepage Hero Section

```tsx
<BookNowButton variant="hero" size="large">
  Book Free Consultation
</BookNowButton>
```

#### Services Page Cards

```tsx
<BookNowButton variant="outline" block>
  Schedule This Service
</BookNowButton>
```

#### Facilities Page

```tsx
<BookNowButton variant="secondary">Tour & Book</BookNowButton>
```

#### Footer or Sidebar

```tsx
<BookNowButton variant="minimal" showIcon={false}>
  Quick Booking
</BookNowButton>
```

#### Dark Background Sections

```tsx
<BookNowButton variant="ghost">Book Appointment</BookNowButton>
```

#### Special Promotions

```tsx
<BookNowButton variant="gradient" size="large">
  Limited Time Offer - Book Now
</BookNowButton>
```

### Customization Beyond Variants

You can still customize any variant further:

```tsx
<BookNowButton
  variant="primary"
  style={{
    borderRadius: "20px",
    fontSize: "18px",
  }}
  className="shadow-2xl"
>
  Custom Styled Button
</BookNowButton>
```

### Responsive Usage

```tsx
// Different variants for different screen sizes
<div className="block md:hidden">
  <BookNowButton variant="minimal" block>
    Book Now
  </BookNowButton>
</div>
<div className="hidden md:block">
  <BookNowButton variant="hero">
    Book Free Consultation
  </BookNowButton>
</div>
```

## Booking Form Fields

The booking form includes the following fields:

- **Name** (required): Full name of the patient
- **Phone** (required): Contact phone number
- **Email** (required): Email address
- **Date** (required): Preferred appointment date
- **Time Slot** (required): Time slot from 9 AM to 8 PM (1-hour slots)
- **What service are you looking for?** (required): Description of needed service and additional notes

### Form Validation

The form includes comprehensive validation:

- Required field validation
- Email format validation
- Phone number format validation
- Date validation (prevents past dates)
- Minimum character validation for names

### Available Time Slots

The time slot dropdown automatically generates slots from 9:00 AM to 8:00 PM:

- 9:00 AM - 10:00 AM
- 10:00 AM - 11:00 AM
- ... and so on until 8:00 PM - 9:00 PM

### Customization

To customize the booking form or add more variants, edit:

- `src/app/shared/components/booking.tsx` - Main booking form component
- `src/app/shared/components/book-now-button.tsx` - Button variants
- `src/app/shared/contexts/booking-context.tsx` - Context for state management

### Form Submission

Currently, the form simulates an API call. To integrate with your backend:

1. Replace the simulated API call in the `handleSubmit` function
2. Add your actual API endpoint
3. Handle success/error responses accordingly

Example:

```tsx
const handleSubmit = async (values: BookingFormData) => {
  setLoading(true);
  try {
    const response = await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      message.success("Booking submitted successfully!");
      form.resetFields();
      closeBookingModal();
    } else {
      throw new Error("Failed to submit booking");
    }
  } catch (error) {
    message.error("Failed to submit booking. Please try again.");
  } finally {
    setLoading(false);
  }
};
```
